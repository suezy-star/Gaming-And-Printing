document.querySelectorAll('.buy-tickets-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const movieId = btn.dataset.movieId;
      document.getElementById('movie-id').value = movieId;
      document.getElementById('payment-modal').style.display = 'block';
    });
  });
  
  document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const movieId = document.getElementById('movie-id').value;
    const amount = document.getElementById('amount').value;
    const phone = document.getElementById('phone').value;
  
    // Call the function to open the M-Pesa payment
    openMpesaPayment(movieId, amount, phone);
  });
  
  function openMpesaPayment(movieId, amount, phone) {
    // Implement the M-Pesa payment API here
    console.log('M-Pesa payment for movie ID:', movieId, 'with amount:', amount, 'for phone:', phone);
  }

  document.getElementById('pay-with-mpesa').addEventListener('click', () => {
    const url = 'sms:+254798146525?body=Pay%20with%20M-Pesa%20%23123456*500#';
    window.location.href = url;
  });

<script>
let myWindow;
function closeWin() {
  myWindow.close()
}
</script>
