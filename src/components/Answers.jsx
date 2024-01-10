import classes from "../styles/Answer.module.css"
import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    <div className={classes.answers}>
    {/* Option 1 */}
    <Checkbox className={classes.answer} text="Test answer"/>
   
    </div>
  );
}