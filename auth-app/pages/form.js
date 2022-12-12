import styles from '../styles/Login.module.css'
import {useState } from 'react'

function Form (props) {
    const [show, setShow] = useState(false);
    const [focused, setFocused] = useState(false);
    const { label, onChange, errorMessage, id, ...inputProps } = props;

    const handleFocused = (e) => {
        setFocused(true)
    }
    
    return (
        <div className={styles.formInput}>
           {inputProps.type === 'password' ? 
           <>
           <input  
           {...inputProps}
           onChange={onChange}
           type={show ? 'text' : 'password'}
           onBlur={handleFocused}
           focused={focused.toString()}
           onFocus={() => inputProps.name === 'ConfirmPassword' && setFocused(true)}
           className={styles.input}/>
           <input type='checkbox' onChange={() => setShow(!show)} value='show password'/>
           <label >Show password</label>
           </>
             : 
            <input  
            {...inputProps} 
            onChange={onChange}
            onBlur={handleFocused}
            focused={focused.toString()}
            className={styles.input}/>
        }
            <span className={styles.err}>{errorMessage}</span>
        </div>
    )
}

export default Form;