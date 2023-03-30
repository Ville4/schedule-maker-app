import { Field, Form, Formik } from "formik";
import m from './addPage.module.css'
import '../../App'
import { useDispatch } from "react-redux";
import { actions, staffType } from "../../redux/app-reducer";

type validationType = {
    name?: string
    available?: string
}

const validate = (values: staffType) => {
    let errors: validationType = {};
    if (values.available.length === 0) {
      errors.available = 'Выберете хотя бы один день';
    } else if (!values.name) {
      errors.name = 'Нужно ввести имя';
    }
    return errors;
};

const AddForm: React.FC = () => {

    const submit = (values: staffType,  {resetForm}: any) => {
        dispatch(actions.addEmployee(values))
        resetForm()
    }
    const dispatch = useDispatch()

    return (
        
        <Formik
            
            initialValues={{ name: '', available: [] }}
            onSubmit={submit}
            validate={validate}
        >
            {({errors, touched}) => (
                
                <Form className={m.form}>
                    <div>
                        <Field className={m.input} type="text" name="name" placeholder='Введите имя' />
                        {errors.name && touched.name && <div className={m.error}>{errors.name}</div>}
                    </div>
                    <div className={m.checkboxWrapper}>
                        <label className={m.checkboxItem}>
                            <Field  className={m.checkbox} type="checkbox" name="available" value="Monday" />
                            Monday
                        </label>
                        <label className={m.checkboxItem}>
                            <Field className={m.checkbox} type="checkbox" name="available" value="Tuesday" />
                            Tuesday
                        </label>
                        <label className={m.checkboxItem}>
                            <Field className={m.checkbox} type="checkbox" name="available" value="Wednesday" />
                            Wednesday
                        </label>
                        <label className={m.checkboxItem}>
                            <Field className={m.checkbox} type="checkbox" name="available" value="Thursday" />
                            Thursday
                        </label>
                        <label className={m.checkboxItem}>
                            <Field className={m.checkbox} type="checkbox" name="available" value="Friday" />
                            Friday
                        </label>
                        <label className={m.checkboxItem}>
                            <Field className={m.checkbox} type="checkbox" name="available" value="Saturday" />
                            Saturday
                        </label>
                        <label className={m.checkboxItem}>
                            <Field className={m.checkbox} type="checkbox" name="available" value="Sunday" />
                            Sunday
                        </label>
                    </div>
                    <div>
                        <button className='button' type="submit">
                            Добавить
                        </button>
                        {errors.available && touched.available && <div className={m.error}>{errors.available}</div>}
                    </div>
                </Form>
            )}
        </Formik>
    )
}


export default AddForm