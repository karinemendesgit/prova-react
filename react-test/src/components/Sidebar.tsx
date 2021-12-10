import classes from "../styles/sidebar.module.css";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <h2 className={classes.title}>The Greatest App</h2>
      <div className={classes.for}>for</div>
      <h1 className={classes.lottery}>LOTTERY</h1>
    </div>
  );
}

export default Sidebar;