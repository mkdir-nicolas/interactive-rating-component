btnSubmitScore.addEventListener("click", (e) => {
  try {
    e.preventDefault();
    let checked = document.querySelector('input[name="score"]:checked').value;
    console.log(checked);
    rating.remove();
    thankYou(checked);
  } catch {
    const btnClass = btnSubmitScore.classList;
    btnClass.add("shake");
    setTimeout(() => btnClass.remove("shake"), 500);
  }
});

const thankYou = (number) => {
  main.innerHTML = `
    <section>
        <img src="./images/illustration-thank-you.svg" alt="" />
        <h3>You selected <span>${number}</span> out of 5</h3>
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
    </section>
 `;
};
