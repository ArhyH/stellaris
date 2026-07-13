import { sizes } from '@/shared/styles';
import { HistoryItem as HistoryItemType } from '../model/types';
import { HistoryItem } from './HistoryItem';
import { Box } from '@/shared/ui/Box';
import styles from './style.module.scss';
import { ID } from '@/shared/types';

type HistoryListProps = {
  historyItems: HistoryItemType[];
  onDelete: (value: ID) => void;
};

const HistoryList = (props: HistoryListProps) => {
  const { historyItems, onDelete } = props;

  return (
    <Box padding={sizes.sizes[20]}>
      <ul className={styles['history-list']}>
        {historyItems.map((item) => {
          return <HistoryItem key={item.id} item={item} onDelete={onDelete} />;
        })}
      </ul>
    </Box>
  );
};

export { HistoryList };
export type { HistoryListProps };
