# 4CADs
 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Skill Scale</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    .scale-button {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      color: white;
      font-weight: bold;
      margin: 5px;
    }
    .beginner { background-color: #aca249; }
    .intermediate { background-color: #cfaa17; }
    .advanced { background-color: #9fcc2e; }
  </style>
</head>
<body class="bg-light text-center">

  <div class="container mt-5">
    <h1>Select Your Skill Level</h1>
    <p>Click on a number to see your skill level category.</p>

    <!-- Scale Buttons -->
    <div id="scale" class="d-flex justify-content-center flex-wrap">
      <!-- Buttons will be generated here dynamically -->
    </div>

    <!-- Output Section -->
    <div id="output" class="mt-4">
      <h2 id="result" class="text-dark"></h2>
    </div>
  </div>

  <!-- Bootstrap Bundle with Popper -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

  <!-- JavaScript Code -->
  <script>
    const scaleContainer = document.getElementById('scale');
    const resultElement = document.getElementById('result');

    // Generate scale buttons dynamically
    for (let i = 1; i <= 10; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.className = 'scale-button';

      // Add color classes based on ranges
      if (i >= 8) button.classList.add('advanced');
      else if (i >= 6) button.classList.add('intermediate');
      else button.classList.add('beginner');

      // Add click event listener
      button.addEventListener('click', () => {
        evaluateSkillLevel(i);
      });

      scaleContainer.appendChild(button);
    }

    // Function to evaluate skill level
    function evaluateSkillLevel(selectedNumber) {
      let message;
      if (selectedNumber >= 8 && selectedNumber <= 10) {
        message = "Advanced";
      } else if (selectedNumber >= 0 && selectedNumber <= 5) {
        message = "Beginner";
      } else if (selectedNumber >= 6 && selectedNumber <= 7) {
        message = "Intermediate";
      } else {
        message = "Sorry, this is an invalid response. Please select a number between 0 and 10.";
      }
      resultElement.textContent = `You selected ${selectedNumber}: ${message}`;
    }
  </script>

</body>
</html>
