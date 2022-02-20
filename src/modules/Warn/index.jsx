import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WarnWrapper } from './styled';
import Button from '../../components/Button';
import { setWarn } from '../../store/reducers/warn';

const WarnModal = () => {
  const dispatch = useDispatch();
  const { item: warn } = useSelector(state => state.warn);
  const hideWarn = useCallback(
    (e) => {
      if (e.currentTarget !== e.target) return;
      dispatch(setWarn(''));
    },
    [warn]
  );

  return (
    <WarnWrapper hidden={!warn} onClick={hideWarn}>
      <div className='warn__dialog'>
        <p className='warn__text'>{warn}</p>
        <Button onClick={hideWarn} content='Ok' />
      </div>
    </WarnWrapper>
  );
};

export default WarnModal;