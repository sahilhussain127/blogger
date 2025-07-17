import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

const GlobalLoader = () => {
  const loading = useSelector((state) => state.loading.global);

  if (!loading) return null;

  return (
    <div style={styles.overlay}>
      <CircularProgress size={60} />
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
};

export default GlobalLoader;
