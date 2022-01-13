import style from './input-text.module.scss';

/* eslint-disable-next-line */
export interface InputTextProps {
  label?: string;
  id?: string;
  onChange?: (...args: []) => void
}

export function InputText(props: InputTextProps) {
  return (
    <div className={style['input-text-wrapper']}>
      {props.label ? <label>{props.label}</label> : null}
      <input
        type="text"
        id={props.id}
        onChange={props.onChange}
        className={style['input-text']}
      />
    </div>
  );
}

export default InputText;
