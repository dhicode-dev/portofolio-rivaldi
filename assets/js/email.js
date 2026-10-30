const EMAILJS_CONFIG = {
    publicKey: 'qyfwdVozIyqP_v9E-',
    serviceId: 'service_ugvypp5',
    templateId: 'template_1zli7qq'
};

// Email penerima (harus sama dengan yang dipakai di template, atau gunakan {{to_email}})
const RECIPIENT_EMAIL = 'rivaldihidayatullah00@gmail.com';

// ===== Initialize EmailJS =====
(function () {
    if (typeof emailjs !== 'undefined') {
        emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
    } else {
        console.error('Library EmailJS belum dimuat. Cek script CDN di HTML.');
    }
})();

// ===== Form Handler =====
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const loadingSpinner = document.getElementById('loading-spinner');
    const formMessage = document.getElementById('form-message');

    if (!form) return;

    let hideTimer = null;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Cek library
        if (typeof emailjs === 'undefined') {
            showMessage('⚠️ Library EmailJS belum dimuat. Cek script CDN di index.html.', 'warning');
            return;
        }

        // Cek konfigurasi masih placeholder
        if (
            EMAILJS_CONFIG.publicKey.startsWith('ISI_') ||
            EMAILJS_CONFIG.serviceId.startsWith('ISI_') ||
            EMAILJS_CONFIG.templateId.startsWith('ISI_')
        ) {
            showMessage('⚠️ EmailJS belum dikonfigurasi. Update credentials di assets/js/email.js', 'warning');
            return;
        }

        setLoadingState(true);

        const email = document.getElementById('from_email').value.trim();

        const formData = {
            from_name: document.getElementById('from_name').value.trim(),
            from_email: email,
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim(),
            to_email: RECIPIENT_EMAIL,
            reply_to: email
        };

        emailjs
            .send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, formData)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                showMessage('✅ Pesan berhasil dikirim! Terima kasih telah menghubungi saya. Saya akan segera membalas.', 'success');
                form.reset();
            })
            .catch(function (error) {
                console.error('FAILED...', error);

                const status = error && error.status ? error.status : '';
                const text = error && error.text ? error.text : (error && error.message ? error.message : 'Unknown error');

                // Tampilkan pesan asli dari EmailJS supaya mudah debug
                showMessage('❌ Gagal mengirim pesan. (' + status + ') ' + text, 'error');
            })
            .finally(function () {
                setLoadingState(false);
            });
    });

    // ===== Helper Functions =====
    function setLoadingState(isLoading) {
        submitBtn.disabled = isLoading;
        btnText.textContent = isLoading ? 'Mengirim...' : 'Kirim Pesan';
        if (loadingSpinner) {
            loadingSpinner.classList.toggle('hidden', !isLoading);
        }
    }

    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.classList.remove(
            'hidden',
            'bg-emerald-500/20', 'text-emerald-400',
            'bg-red-500/20', 'text-red-400',
            'bg-yellow-500/20', 'text-yellow-400'
        );

        switch (type) {
            case 'success':
                formMessage.classList.add('bg-emerald-500/20', 'text-emerald-400');
                break;
            case 'error':
                formMessage.classList.add('bg-red-500/20', 'text-red-400');
                break;
            case 'warning':
                formMessage.classList.add('bg-yellow-500/20', 'text-yellow-400');
                break;
        }

        clearTimeout(hideTimer);
        // Error tampil lebih lama (15 detik) supaya sempat dibaca
        hideTimer = setTimeout(function () {
            formMessage.classList.add('hidden');
        }, type === 'error' ? 15000 : 5000);
    }
});
