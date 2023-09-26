import React from 'react';
import { TrashIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';
import { WORDS_MODE } from 'libs/constants/names.storage';
import { useLocalStorage, useWords, useWordsApi } from 'libs/hooks';
import { WordsMode } from 'libs/types/types';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

export const DeleteButtonWithModal = ({
  wordId,
}: {
  wordId: string;
}): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [wordsMode] = useLocalStorage<WordsMode>(WORDS_MODE, 'userWords');

  const { mutateWords, mutateCount } = useWords({ mode: wordsMode });
  const { api } = useWordsApi(wordsMode);

  const handleDeleteButton = async () => {
    await api.deleteWord(wordId);
    mutateWords();
    mutateCount();
    setIsOpen(false);
  };

  return (
    <Modal
      basic
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={isOpen}
      size="small"
      trigger={
        <IconButton variant="surface" color="red">
          <TrashIcon width="18" height="18" />
        </IconButton>
      }>
      <Header icon>
        <Icon name="trash" />
        Delete word
      </Header>
      <Modal.Content>
        <p>Do you really want to delete this word?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => setIsOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" inverted onClick={handleDeleteButton}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
