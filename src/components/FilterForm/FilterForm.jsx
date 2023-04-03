import { Formik } from 'formik';
import { Field } from './FilterForm.styled';
import { changeFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

const FilterForm = () => {
  const dispatch = useDispatch();
  const handleChange = ({ currentTarget: { value } }) => {
    dispatch(changeFilter(value));
  };
  return (
    <Formik>
      <Field name="filter" onChange={handleChange} />
    </Formik>
  );
};

export default FilterForm;
