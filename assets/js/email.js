// ===== EmailJS Configuration =====
// PENTING: Ganti dengan credentials EmailJS Anda
// Daftar di https://www.emailjs.com/ untuk mendapatkan credentials

const EMAILJS_CONFIG = {
    publicKey: 'qyfwdVozIyqP_v9E-',
    serviceId: 'service_ugvypp5',
    templateId: 'template_qp9kgyr'
};

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
                showMessage('✅ Pesan berhasil dikirim! Terima kasih telah menghubungi saya. Saya akan segera membalas.', 'success');
                form.reset();
            }, function(error) {
                console.error('FAILED...', error);
                // Show detailed error for debugging
                let errorMsg = '❌ Gagal mengirim pesan. ';

                if (error.status === 400) {
                    errorMsg += 'Template tidak valid. Pastikan variabel {{name}}, {{email}}, {{message}}, {{time}} sudah ada di EmailJS template.';
                } else if (error.status === 401) {
                    errorMsg += 'Public Key tidak valid. Cek konfigurasi di assets/js/email.js';
                } else if (error.status === 403) {
                    errorMsg += 'Service tidak aktif. Cek EmailJS dashboard.';
                } else if (error.status === 404) {
                    errorMsg += 'Service/Template ID salah. Cek konfigurasi di assets/js/email.js';
                } else if (error.text) {
                    errorMsg += error.text;
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
            btnText.textContent = 'Mengirim...';
            loadingSpinner.classList.remove('hidden');
        } else {
            submitBtn.disabled = false;
            btnText.textContent = 'Kirim Pesan';
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
