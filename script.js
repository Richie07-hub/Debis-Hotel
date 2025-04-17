<script>
  // Wait for the DOM to fully load
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#bookingForm form");
    
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.querySelector('input[placeholder="Your name"]').value;
      const roomType = document.getElementById("roomType").value;
      const nights = parseInt(document.getElementById("nights").value);

      let pricePerNight;
      switch (roomType) {
        case "Standard Room":
          pricePerNight = 8000;
          break;
        case "Deluxe Room":
          pricePerNight = 12000;
          break;
        case "Executive Suite":
          pricePerNight = 20000;
          break;
        case "Short Rest":
          pricePerNight = 3000;
          break;
        default:
          pricePerNight = 0;
      }

      const total = pricePerNight * nights;

      alert(`Thank you, ${name}! Your booking for a ${roomType} for ${nights} night(s) is confirmed.\nTotal: ₦${total.toLocaleString()}`);
    });
  });
</script>
