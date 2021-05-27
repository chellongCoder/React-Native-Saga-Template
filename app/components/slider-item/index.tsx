import React, { useCallback, useState } from 'react';
import { useStylesItemTopic } from './styles';
import Card from './Card';

const _TopicItem = ({ item, onPress }: { item: any; onPress: () => void }) => {
  const styles = useStylesItemTopic();
  const [isShow, setIsShow] = useState(false);

  return <Card {...{ item, onPress }} />;
};

export const TopicItem = React.memo(_TopicItem);
