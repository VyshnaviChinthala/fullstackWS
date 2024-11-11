import React from 'react'

const Product = () => {
  return(
    <>
    <div>






{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<nav aria-label="Breadcrumb">
  <ol className="flex items-center gap-1 text-sm text-gray-600">
    <li>
      <a href="#" className="block transition hover:text-gray-700">
        <span className="sr-only"> Home </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
    </li>

    <li className="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </li>

    <li>
      <a href="#" className="block transition hover:text-gray-700"> Shirts </a>
    </li>

    <li className="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </li>

    <li>
      <a href="#" className="block transition hover:text-gray-700"> Plain Tee </a>
    </li>
  </ol>
</nav>











    </div>
  
  
    <div>
      




      <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
    className="h-32 w-full object-cover md:h-full"
  />

  <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
    <p className="text-sm font-semibold uppercase tracking-widest">Run with the pack</p>

    <h2 className="mt-6 font-black uppercase">
      <span className="text-4xl font-black sm:text-5xl lg:text-6xl"> Get 20% off </span>

      <span className="mt-2 block text-sm">On your next order over $50</span>
    </h2>

    <a
      className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
      href="#"
    >
      Get Discount
    </a>

    <p className="mt-8 text-xs font-medium uppercase text-gray-400">
      Offer valid until 24th March, 2021 *
    </p>
  </div>
</section>











    </div>
    </>
  )
  
}


export default Product
