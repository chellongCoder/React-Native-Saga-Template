import React, { memo, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ItemNew, ListFullOption, SearchBar } from '../../components';
import { mapperNewsByCategory } from '../../helpers/news.helper';
import { RootState } from '../../redux/reducers';
import { Platform } from '../../theme';
import { NewsByCategoryT } from '../news/types';
import { useNotficationStyle } from './styles';

const _NotificationScreen = () => {
  const { news: _news } = useSelector((state: RootState) => state.NewData);

  const news = useMemo(() => mapperNewsByCategory(_news), [_news]);

  const styles = useNotficationStyle();

  const renderItemContent = (item: NewsByCategoryT) => {
    return <ItemNew {...{ item }} />;
  };

  return (
    <View style={styles.container}>
      <SearchBar style={styles.viewSearchBar} />
      <ListFullOption
        data={news}
        showsVerticalScrollIndicator={false}
        renderSubItem={renderItemContent}
        style={{ paddingHorizontal: Platform.SizeScale(20) }}
        // ListEmptyComponent={renderEmpty}
        // onRefreshEvent={getNewCategoryRequest}
        listFooterComponent={<View style={{ height: Platform.SizeScale(25) }} />}
        {...{
          // onLoadMore,
          loadMore: true,
          // refreshing: isLoading,
        }}

        // {...{ ListHeaderComponent }}
      />
    </View>
  );
};

export const NotificationScreen = memo(_NotificationScreen);
