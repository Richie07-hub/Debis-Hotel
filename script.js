document.getElementById("bookingForm") .addEventListener("submit", function(e) {
   e.preventDefault();

const name = document.getElementById("name"). value;
const roomType = document.getElementById("roomType"). value;
const nights = paraInt(document.getElementById("nights"). value);

const pricePerNight = roomType === "Deluxe Room" ? 25000 : 45000;

const total = pricePerNight * nights;

alert('Thank You, ${name}! Your booking for a ${roomType} for ${nights} night(s) is confirmed. \nTotal: #${total};
      });
