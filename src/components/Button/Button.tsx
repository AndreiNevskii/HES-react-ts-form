import './Button.css';
import {IButton} from '../../interfaces/compinterfaces';


export default function Button({onClick, className, label}:IButton): HTMLElement {
  return (
    <button className={className} onClick={onClick}>{label}</button>
  )
}