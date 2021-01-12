import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledMotionP = styled(motion.p)`
	position: absolute;
	margin-top: 252px;
	color: white;
	font-weight: 400;
	font-size: 1.1em;
	font-family: ${({ theme }) => theme.font};
`;
