import React from 'react';
import { StyledCell } from './Styles/StyledCell';
import {TETROMINOS} from '../tetrominos';

const Cell = ({type}) => (
    <StyledCell type={type} color={TETROMINOS[type]}>cell</StyledCell>
)

export default Cell;