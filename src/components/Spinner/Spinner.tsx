import "./Spinner.scss";

interface SpinnerProps {
  id?: string;
}
export const Spinner = ({ id }: SpinnerProps) => {
  return <div className="spinner" id={id}></div>;
};
