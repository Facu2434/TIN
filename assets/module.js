/* =========================================================
   TIN — Navegación genérica de módulos de clase
   =========================================================
   Uso en una clase nueva:
     <script src="assets/module.js"></script>
     <script>initStepModule(TOTAL_DE_PANTALLAS);</script>

   Espera en el HTML:
     - Pantallas: <div class="screen" id="screen-1">, "screen-2", ...
     - Botones:   #btn-prev y #btn-next
     - Contador:  #step-counter
   ========================================================= */

function initStepModule(totalSteps) {
  let currentStep = 1;

  const counter = document.getElementById("step-counter");
  const prevBtn = document.getElementById("btn-prev");
  const nextBtn = document.getElementById("btn-next");

  function updateUI() {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    const active = document.getElementById(`screen-${currentStep}`);
    if (active) active.classList.add("active");

    if (counter) counter.innerText = `${currentStep} / ${totalSteps}`;
    if (prevBtn) prevBtn.style.visibility = currentStep === 1 ? "hidden" : "visible";
    if (nextBtn) nextBtn.style.visibility = currentStep === totalSteps ? "hidden" : "visible";
  }

  function changeStep(direction) {
    currentStep += direction;
    if (currentStep < 1) currentStep = 1;
    if (currentStep > totalSteps) currentStep = totalSteps;
    updateUI();
  }

  if (prevBtn) prevBtn.addEventListener("click", () => changeStep(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => changeStep(1));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === " ") changeStep(1);
    else if (e.key === "ArrowLeft") changeStep(-1);
  });

  updateUI();
}
