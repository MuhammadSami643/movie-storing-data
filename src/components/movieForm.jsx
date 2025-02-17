import { useFormik } from "formik";
import * as Yup from "yup"; // For validation
import "../componentsCSS/movieForm.css";

// eslint-disable-next-line react/prop-types
const MovieForm = ({ addMovie }) => {
  // Define Formik hook and validation schema
  const formik = useFormik({
    initialValues: {
      movieName: "",
      dateWatched: "",
    },
    validationSchema: Yup.object({
      movieName: Yup.string()
        .required("Movie name is required")
        .min(3, "Movie name should be at least 3 characters"),
      dateWatched: Yup.date().required("Date is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission
      addMovie(values);
      formik.resetForm(); // Reset form after submission
    },
  });

  return (
    <form className="movie-form" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        id="movieName"
        name="movieName"
        placeholder="Movie Name"
        value={formik.values.movieName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={
          formik.touched.movieName && formik.errors.movieName
            ? "input-error"
            : ""
        }
      />
      {formik.touched.movieName && formik.errors.movieName ? (
        <div className="error">{formik.errors.movieName}</div>
      ) : null}

      <input
        type="date"
        id="dateWatched"
        name="dateWatched"
        value={formik.values.dateWatched}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={
          formik.touched.dateWatched && formik.errors.dateWatched
            ? "input-error"
            : ""
        }
      />
      {formik.touched.dateWatched && formik.errors.dateWatched ? (
        <div className="error">{formik.errors.dateWatched}</div>
      ) : null}

      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
