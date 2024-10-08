import { TextInput } from 'react-native';
import { useEffect, useRef} from 'react';

export default function App() {
  const input = useRef(null);
  useEffect(() => { setTimeout(() => input.current?.focus(), 1000); }, []);
  return <TextInput ref={input} value='1.00' selection={{start: 4, end: 4}} />;
}
