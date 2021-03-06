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
      {props.label ? <label className='block text-sm font-medium text-gray-700'>{props.label}</label> : null}
      <input
        type="text"
        id={props.id}
        onChange={props.onChange}
        className='w-64 h-8 rounded border border-gray-500 p-2 text-sm text-gray-700'
        />
    </div>
  );
}

export default InputText;
