import { View } from 'react-native';

interface SpacerProps {
  height?: number;
}

const Spacer = ({ height = 20 }: SpacerProps) => {
  return <View style={{ height: height }} />;
};

export default Spacer;
