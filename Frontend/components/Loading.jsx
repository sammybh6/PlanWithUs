// import "./styles.css";
import { useState } from "react";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";

const data = [
    {
        src:
            "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
        title: "Don Diablo @ Tomorrowland",
        channel: "Don Diablo"
    },
    {
        src:
            "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
        title: "Queen - Greatest Hits",
        channel: "Queen Official"
    },
    {
        src:
            "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
        title: "Promises (Official Video)",
        channel: "Calvin Harris"
    }
];

export default function App() {
    const [loading, setLoading] = useState({
        button: false,
        circular: false,
        linear: false,
        skeleton: false
    });
    const clickHandler = (type) => {
        setLoading({ ...loading, [type]: true });
        setTimeout(() => setLoading({ ...loading, [type]: false }), 2000);
    };
    return (
        // <Box>
        <CircularLoading />
        // {/* <Button
        //     sx={{ m: 1 }}
        //     onClick={() => clickHandler("circular")}
        //     variant="outlined"
        // >
        //     Circular
        // </Button> */}
        // </Box>
    );
}

const Content = () => (
    <Box sx={{ p: 1 }}>
        <Typography variant="h4">Latest Videos:</Typography>
        <Grid container wrap="nowrap">
            {data.map((item, index) => (
                <Box key={index} sx={{ width: 210, marginRight: 1, my: 2 }}>
                    <img
                        style={{ width: 210, height: 118 }}
                        alt={item.title}
                        src={item.src}
                    />
                    <Box sx={{ pr: 2 }}>
                        <Typography gutterBottom variant="body2">
                            {item.title}
                        </Typography>
                        <Typography
                            display="block"
                            variant="caption"
                            color="text.secondary"
                        >
                            {item.channel}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Grid>
    </Box>
);

const DisabledBackground = styled(Box)({
    width: "100%",
    height: "100%",
    position: "fixed",
    background: "#ccc",
    opacity: 0.5,
    zIndex: 1
});

const CircularLoading = () => (
    <>
        <CircularProgress
            size={70}
            sx={{
                position: "fixed",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2
            }}
        />
        <DisabledBackground />
    </>
);


