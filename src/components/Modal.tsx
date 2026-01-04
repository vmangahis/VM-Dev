import { createPortal } from "react-dom";

function Modal() {
  const rootElement : Element = document.getElementById('root') as Element;
  return(
    <>
    <div>
      {createPortal(<h1 className="dummyPortal">Working</h1>, rootElement)}
    </div>
    </>
  );
}

export default Modal;