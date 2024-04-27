import { Edit } from "@mui/icons-material";
import { Box } from "@mui/material";

interface EditProps {
    onClick: () => void;
}

function Edits({ onClick }: EditProps) {
    return (
        <Box onClick={onClick} sx={{ fontSize: "10px", color: "gray" }}>
            <Edit />
        </Box>
    );
}

export default Edits;
