import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogHeader,
} from '@/shared/ui/Dialog';
import { Typography, typographyProps } from '@/shared/ui/Typography';
import { colors, sizes } from '@/shared/styles';
import { Button, buttonProps } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { icons } from '@/shared/assets';
import { Row } from '@/shared/ui/Row';
import { DeleteState } from '..';
import { deleteMessages } from '../model/consts';

type DeleteCategoryProps = {
  open: boolean;
  onOpen: (value: boolean) => void;
  onSubmit: () => void;
  onClose: () => void;
  deleteState: DeleteState | null;
};

const DeleteCategory = (props: DeleteCategoryProps) => {
  const { open, onOpen, onSubmit, onClose, deleteState } = props;

  if (!deleteState) {
    return;
  }

  const message =
    deleteMessages[
      deleteState.dependentBudget
        ? deleteState.hasTransaction
          ? 'both'
          : 'budget'
        : 'transaction'
    ];

  return (
    <Dialog open={open} onOpen={onOpen} onClose={onClose}>
      <DialogContent>
        <DialogHeader>
          <Typography
            tag={typographyProps.tags.h3}
            type={typographyProps.types.title18}
            color={colors.base.white}
          >
            {message.title}
          </Typography>

          <DialogClose>
            <Button
              theme={buttonProps.themes.lightgray}
              size={sizes.sizes['32']}
              radius={sizes.radiuses[14]}
            >
              <Icon icon={icons.cross14} size={sizes.sizes[14]} />
            </Button>
          </DialogClose>
        </DialogHeader>
        <DialogBody>
          <Typography
            tag={typographyProps.tags.h3}
            type={typographyProps.types.text16}
            color={colors.lightgray[4]}
          >
            {message.description}
          </Typography>

          <Row width={sizes.sizes.parent} gap={sizes.sizes[16]}>
            <DialogClose>
              <Button
                theme={buttonProps.themes.red}
                height={sizes.sizes[44]}
                width={sizes.sizes.parent}
                onClick={onSubmit}
              >
                <Typography
                  tag={typographyProps.tags.h3}
                  type={typographyProps.types.title14}
                >
                  Delete
                </Typography>
              </Button>
            </DialogClose>

            <DialogClose>
              <Button
                theme={buttonProps.themes.lightgray}
                height={sizes.sizes[44]}
                width={sizes.sizes.parent}
              >
                <Typography
                  tag={typographyProps.tags.h3}
                  type={typographyProps.types.title14}
                >
                  Cancel
                </Typography>
              </Button>
            </DialogClose>
          </Row>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export { DeleteCategory };
export type { DeleteCategoryProps };
