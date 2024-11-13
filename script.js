// Select total price element
const totalPriceElement = document.querySelector('.total');

// Update total price based on quantities and prices
function updateTotalPrice() {
    let total = 0;
    document.querySelectorAll('.card-body').forEach(item => {
        const price = parseFloat(item.querySelector('.unit-price').textContent.replace('$', ''));
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        total += price * quantity;
    });

    if (totalPriceElement) {
        totalPriceElement.textContent = `${total.toFixed(2)} $`;
    }
}

// Set up event listeners on page load
document.addEventListener('DOMContentLoaded', () => {
    // "+" button to increase quantity
    document.querySelectorAll('.fa-plus-circle').forEach(button => {
        button.addEventListener('click', (e) => {
            const quantityElement = e.target.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = quantity + 1;
            updateTotalPrice();
        });
    });

    // "-" button to decrease quantity
    document.querySelectorAll('.fa-minus-circle').forEach(button => {
        button.addEventListener('click', (e) => {
            const quantityElement = e.target.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantityElement.textContent = quantity - 1;
                updateTotalPrice();
            }
        });
    });

    // Delete (trash) button to remove an item
    document.querySelectorAll('.fa-trash-alt').forEach(button => {
        button.addEventListener('click', (e) => {
            const item = e.target.closest('.card-body');
            item.remove();
            updateTotalPrice();
        });
    });

    // Like (heart) button to toggle liked state
    document.querySelectorAll('.fa-heart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.classList.toggle('liked');
        });
    });

    // Initial total price calculation
    updateTotalPrice();
});
