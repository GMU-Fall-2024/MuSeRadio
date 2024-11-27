function requestHelp()
{
    document.querySelector('#help_form').addEventListener('submit', async function (e) {
        e.preventDefault();
    
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries()); // Convert form data to JSON
    
        try {
            const response = await fetch('/help', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            const result = await response.json();
            alert(result.message);
    
            if (response.ok) {
                this.reset(); // Clear the form on success
            }
        } catch (error) {
            console.error('Error submitting the form:', error);
            alert('An error occurred. Please try again.');
        }
    });
}