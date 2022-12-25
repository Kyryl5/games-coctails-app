import ArrowRightSvg from "./ArrowRightSvg";

export default function brandButton({ buttontext, buttonlink }) {
  return (
    <div className="brand-button">
      <div className="circle-block"></div>
      <a href={buttonlink} className="brand-button-a">
        {buttontext}
        <span className="brand-button-arrow">
          {
            <svg
              width="10"
              height="8"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7071 8.70711C20.0976 8.31658 20.0976 7.68342 19.7071 7.29289L13.3431 0.928933C12.9526 0.538409 12.3195 0.538409 11.9289 0.928933C11.5384 1.31946 11.5384 1.95262 11.9289 2.34315L17.5858 8L11.9289 13.6569C11.5384 14.0474 11.5384 14.6805 11.9289 15.0711C12.3195 15.4616 12.9526 15.4616 13.3431 15.0711L19.7071 8.70711ZM-8.74228e-08 9L19 9L19 7L8.74228e-08 7L-8.74228e-08 9Z"
                fill="#101010"
              />
            </svg>
          }
        </span>
      </a>
    </div>
  );
}
