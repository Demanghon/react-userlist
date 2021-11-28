import { createRef, useEffect } from "react";
import style from "./ValidationErrors.module.css";

interface ValidationErrorsProps {
    errors: string[];
}

const ValidationErrors = ({errors}: ValidationErrorsProps) => {
    const ulElement = createRef<HTMLUListElement>();

    useEffect(() => {
        if (errors.length > 0) {
            ulElement.current!.style.height = `${ulElement.current!.scrollHeight}px`;
        }else{
            ulElement.current!.style.height = "0px";
        }
    })

    return (
      <ul className={`${style["validation-errors"]} ${errors.length > 0 && style.invalid}`} ref={ulElement}>
        {errors.map((error:string, index:number) => {
          return <li key={index}>{error}</li>;
        })}
      </ul>
    );
}

export default ValidationErrors;