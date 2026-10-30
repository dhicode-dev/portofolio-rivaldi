const EMAILJS_CONFIG = {
    publicKey: 'qyfwdVozIyqP_v9E-',
    serviceId: 'service_ugvypp5',
    templateId: 'template_qp9kgyr'
};

// ===== Helper: Ambil teks terjemahan =====
function t(key, fallback) {
    if (typeof translations !== 'undefined' && translations) {
        const lang = localStorage.getItem('preferredLang') || 'id';
        return (translations[lang] && translations[lang][key]) || fallback;
    }
    return fallback;
}

// ===== Initialize EmailJS =====
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init({
            publicKey: EMAILJS_CONFIG.publicKey,
        });
    }
})();

// ===== Form Handler =====
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const loadingSpinner = document.getElementById('loading-spinner');
    const formMessage = document.getElementById('form-message');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Check if EmailJS is configured
        if (EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
            showMessage('⚠️ EmailJS belum dikonfigurasi. Silakan update credentials di file assets/js/email.js', 'warning');
            return;
        }

        // Show loading state
        setLoadingState(true);

        // Get form data
        // Kirim semua variabel untuk Template Settings & Template HTML
        const formData = {
            // === Untuk Template Settings (From name, Reply to, Subject) ===
            from_name: document.getElementById('from_name').value,
            from_email: document.getElementById('from_email').value,
            subject: document.getElementById('subject')?.value || 'Pesan dari form kontak',

            // === Untuk Template HTML Content ({{name}}, {{message}}, {{time}}) ===
            name: document.getElementById('from_name').value,
            email: document.getElementById('from_email').value,
            message: document.getElementById('message').value,
            time: new Date().toLocaleString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }),

            // === Untuk routing email ===
            to_email: 'rivaldihidayatullah00@gmail.com',
            reply_to: document.getElementById('from_email').value
        };

        // Send email using EmailJS
        emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, formData)
            .then(function(response) {
                console.log('SUCCESS!', response);
                showMessage(t('form_success', '✅ Pesan berhasil dikirim! Terima kasih telah menghubungi saya. Saya akan segera membalas.'), 'success');
                form.reset();
            }, function(error) {
                console.error('FAILED...', error);
                let errorMsg = t('form_error', '❌ Gagal mengirim pesan. Silakan coba lagi atau hubungi saya melalui email/WhatsApp.');

                if (error.status === 400) {
                    errorMsg = t('form_error_template', 'Template tidak valid. Hubungi admin.');
                } else if (error.status === 401 || error.status === 403) {
                    errorMsg = t('form_error_auth', 'Konfigurasi email tidak valid.');
                } else if (error.status === 404) {
                    errorMsg = t('form_error_service', 'Service email tidak aktif.');
                } else if (error.text) {
                    errorMsg += ' ' + error.text;
                }

                console.error('Error detail:', error);
                showMessage(errorMsg, 'error');
            })
            .finally(function() {
                setLoadingState(false);
            });
    });

    // ===== Helper Functions =====
    function setLoadingState(isLoading) {
        if (isLoading) {
            submitBtn.disabled = true;
            btnText.textContent = t('form_submitting', 'Mengirim...');
            loadingSpinner.classList.remove('hidden');
        } else {
            submitBtn.disabled = false;
            btnText.textContent = t('form_submit', 'Kirim Pesan');
            loadingSpinner.classList.add('hidden');
        }
    }

    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.classList.remove('hidden', 'bg-emerald-500/20', 'text-emerald-400', 'bg-red-500/20', 'text-red-400', 'bg-yellow-500/20', 'text-yellow-400');

        switch(type) {
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

        // Auto hide after 5 seconds
        setTimeout(function() {
            formMessage.classList.add('hidden');
        }, 5000);
    }
});
