import { sizes } from '@/shared/styles';
import { HistoryItem as HistoryItemType } from '../model/types';
import { HistoryItem } from './HistoryItem';
import { Box } from '@/shared/ui/Box';
import styles from './style.module.scss';

type HistoryListProps = {
  historyItems: HistoryItemType[];
};

const HistoryList = (props: HistoryListProps) => {
  const { historyItems } = props;

  console.log(historyItems);

  return (
    <Box padding={sizes.sizes[20]}>
      <ul className={styles['history-list']}>
        {historyItems.map((item) => {
          return <HistoryItem key={item.id} item={item} />;
        })}
      </ul>
    </Box>
  );
};

export { HistoryList };
export type { HistoryListProps };
