import { Button, Title } from '../components/ui';
import { ScreenType } from '../lib/utils/types';

type Props = {
  onScreenChange: (value: ScreenType) => void;
};

export default function GameEnd({ onScreenChange }: Props) {
  return (
    <>
      <Title>GameEnd</Title>
      <Button onPress={() => onScreenChange('start')}>Play Again</Button>
    </>
  );
}
