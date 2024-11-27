async function deleteAccount(userId) {
    const confirmDeletion = confirm("Are you sure you want to delete this account? This action cannot be undone.");
    if (!confirmDeletion) {
        return;
    }

    try {
        const response = await fetch(`/profile/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message);
            // Redirect or refresh to update UI after deletion
            window.location.href = '/'; // Redirect to home or another relevant page
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error deleting account:', error);
        alert('An unexpected error occurred while deleting the account.');
    }
}

async function updateProfile(userId) {
    // Gather updated data from the form
    const updatedData = {};
    const form = document.querySelector('#profile_form_entry');

    // Collect form inputs
    new FormData(form).forEach((value, key) => {
        updatedData[key] = value;
    });

    try {
        const response = await fetch(`/profile/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message);
            window.location.reload();
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.message}`);
            console.log(userId);
        }
    } catch (error) {
        console.error('Error updating profile:', error);
        alert('An unexpected error occurred while updating the profile.');
    }
}

window.onload = function () {
    document.querySelector('#profile_form_entry').addEventListener('submit', function (e) {
        e.preventDefault(); 
        const userId = this.dataset.userId;
        updateProfile(userId);
    });
}