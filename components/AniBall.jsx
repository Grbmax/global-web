import React from 'react'

const AniBall = () => {
  window.onload = () => {
    hideLoading();
  };


  function hideLoading() {

    const loadingElem = document.querySelector('loading');

    // mock loading for 2s
    setTimeout(() => {

      loadingElem.classList.add("hide");
      setTimeout(() => {
        loadingElem.style.display = "none";
      }, 1300);
    }, 2000);

  }
  return (
    <>
      <div class="loading">
        <div class="enlarging-circle"></div>
        {/* <div class="circle "></div> */}
        <div class="ball drop flex items-center justify-center text-2xl font-bold">AER</div>

      </div>
    </>
  )
}

export default AniBall

