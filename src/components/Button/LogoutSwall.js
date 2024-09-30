const logout = (Swal) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You are going to log out!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log me out!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Logged out!",
                text: "You have successfully logged out.",
                icon: "success"
            });
        }
    });
}

module.exports = { logout }
