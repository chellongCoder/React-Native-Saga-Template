import React, { useCallback, useState } from 'react';
import { useStylesItemTopic } from './styles';
import Card from './Card';

const _TopicItem = ({ item, onPress }: { item: any; onPress: (item: any[]) => void }) => {
  const styles = useStylesItemTopic();
  const [isShow, setIsShow] = useState(false);

  return <Card {...{ item }} />;
};

export const TopicItem = React.memo(_TopicItem);
