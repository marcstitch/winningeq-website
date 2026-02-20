// Mailchimp Popup Integration
// Shows after 5 seconds on homepage only

(function() {
    // Only run on homepage
    if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
        return;
    }

    // Check if user has already seen popup (using localStorage)
    if (localStorage.getItem('mailchimpPopupSeen')) {
        return;
    }

    // Create popup HTML
    const popupHTML = `
        <div id="mailchimp-popup-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); z-index: 9999; justify-content: center; align-items: center;">
            <div id="mailchimp-popup" style="background: white; border-radius: 12px; max-width: 500px; width: 90%; padding: 40px 30px; position: relative; box-shadow: 0 20px 60px rgba(0,0,0,0.3); animation: slideIn 0.3s ease-out;">
                <button id="popup-close" style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 28px; cursor: pointer; color: #666; line-height: 1; padding: 0; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;">&times;</button>
                
                <h2 style="font-size: 26px; color: #1a1a1a; margin: 0 0 10px 0; font-weight: 700; text-align: center;">Be agile. Stay informed. Subscribe now.</h2>
                
                <form id="mailchimp-popup-form" style="margin-top: 25px;">
                    <input type="text" id="popup-fname" name="FNAME" placeholder="First Name" required style="width: 100%; padding: 14px; margin-bottom: 12px; border: 2px solid #e0e0e0; border-radius: 6px; font-size: 15px; box-sizing: border-box; font-family: Arial, sans-serif;">
                    
                    <input type="text" id="popup-lname" name="LNAME" placeholder="Last Name" required style="width: 100%; padding: 14px; margin-bottom: 12px; border: 2px solid #e0e0e0; border-radius: 6px; font-size: 15px; box-sizing: border-box; font-family: Arial, sans-serif;">
                    
                    <input type="email" id="popup-email" name="EMAIL" placeholder="Email Address" required style="width: 100%; padding: 14px; margin-bottom: 20px; border: 2px solid #e0e0e0; border-radius: 6px; font-size: 15px; box-sizing: border-box; font-family: Arial, sans-serif;">
                    
                    <button type="submit" style="width: 100%; padding: 16px; background: #c49a47; color: white; border: none; border-radius: 6px; font-size: 16px; font-weight: 700; cursor: pointer; transition: background 0.3s ease; font-family: Arial, sans-serif;">Get Updates</button>
                    
                    <div id="popup-message" style="margin-top: 15px; text-align: center; font-size: 14px;"></div>
                </form>
            </div>
        </div>
        
        <style>
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateY(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            #popup-close:hover {
                color: #000;
            }
            
            #mailchimp-popup-form button[type="submit"]:hover {
                background: #b08935;
            }
            
            #mailchimp-popup-form input:focus {
                outline: none;
                border-color: #c49a47;
            }
        </style>
    `;

    // Add popup to page
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    const overlay = document.getElementById('mailchimp-popup-overlay');
    const closeBtn = document.getElementById('popup-close');
    const form = document.getElementById('mailchimp-popup-form');
    const message = document.getElementById('popup-message');

    // Show popup after 5 seconds
    setTimeout(() => {
        overlay.style.display = 'flex';
    }, 5000);

    // Close popup
    function closePopup() {
        overlay.style.display = 'none';
        localStorage.setItem('mailchimpPopupSeen', 'true');
    }

    closeBtn.addEventListener('click', closePopup);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closePopup();
        }
    });

    // Handle form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const fname = document.getElementById('popup-fname').value;
        const lname = document.getElementById('popup-lname').value;
        const email = document.getElementById('popup-email').value;

        // Disable submit button
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Subscribing...';
        message.textContent = '';

        try {
            const response = await fetch('/.netlify/functions/subscribe-mailchimp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    firstName: fname,
                    lastName: lname
                })
            });

            const data = await response.json();

            if (data.success) {
                message.style.color = '#2ecc71';
                message.textContent = 'Success! You\'re subscribed.';
                form.reset();
                setTimeout(closePopup, 3000);
            } else {
                message.style.color = '#e74c3c';
                message.textContent = data.message || 'Something went wrong. Please try again.';
                submitBtn.disabled = false;
                submitBtn.textContent = 'Get Updates';
            }

        } catch (error) {
            console.error('Subscription error:', error);
            message.style.color = '#e74c3c';
            message.textContent = 'Something went wrong. Please try again.';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Get Updates';
        }
    });
})();
