export default function FloatingWhatsApp() {
  const message = "Hello Malhar Car Rental Service, I would like to book a vehicle. Please provide details.";
  const encodedMessage = encodeURIComponent(message);
  
  return (
    <a
      href={`https://wa.me/917972556962?text=${encodedMessage}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-8 h-8 md:w-10 md:h-10 fill-current"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.161.453-.834.815-1.146.852-.313.037-.58.125-1.928-.431-1.623-.67-2.658-2.316-2.738-2.423-.08-.106-.653-.871-.653-1.66 0-.789.412-1.182.553-1.336.141-.153.308-.191.411-.191.103 0 .205.004.298.008.106.005.249-.041.383.286.141.345.48 1.173.522 1.258.043.085.07.185.018.291-.052.106-.08.172-.15.253-.07.081-.149.172-.211.233-.071.071-.144.148-.063.287.081.139.362.598.777.969.537.48.988.632 1.129.699.141.067.223.057.307-.038.084-.095.362-.421.46-.566.098-.145.195-.12.324-.072.129.048.818.386.959.456.141.07.235.106.269.167.034.06.034.349-.127.802z" />
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.745.452 3.388 1.253 4.813L2 22l5.35-1.258C8.75 21.547 10.334 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.232c-1.424 0-2.822-.366-4.062-1.066l-.291-.163-3.083.722.735-2.946-.182-.293A8.256 8.256 0 0 1 3.768 12 8.243 8.243 0 0 1 12 3.768 8.243 8.243 0 0 1 20.232 12 8.243 8.243 0 0 1 12 20.232z" />
      </svg>
      {/* Tooltip */}
      <span className="absolute overflow-hidden w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 group-hover:right-full group-hover:mr-4 transition-all duration-300 bg-white text-slate-800 text-sm font-semibold py-2 px-4 rounded-xl shadow-lg border border-slate-100 whitespace-nowrap hidden md:block">
        Book on WhatsApp
      </span>
    </a>
  );
}
