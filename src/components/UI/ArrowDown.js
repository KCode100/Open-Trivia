import AnchorLink from 'react-anchor-link-smooth-scroll'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ArrowDown = ({ to, color }) => {
    return (
        <AnchorLink href={to}>
            <ArrowDownwardIcon
                className="down-icon"
                color={color}
            />
        </AnchorLink>
    );
}

export default ArrowDown;