// React Imports
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native';
import { Button } from '@react-navigation/elements';
import { spacing, typography, scheme } from '../styles/values';

// Thirdfort Imports
import { TaskDescriptionTaskStepParams } from '../../libs/genproto/thirdfort/consumer/tasksteps/type/v1/task-description_pb';

type TaskDescriptionTaskStepProps = {
  params: TaskDescriptionTaskStepParams;
  onTaskStepComplete: () => void;
};

type ListItemProps = {
  children: React.ReactNode;
};

const ListItem: React.FC<ListItemProps> = ({ children }) => (
  <View style={styles.listItem}>
    <Text style={styles.listItemText}>{'\u2022'}</Text>
    <Text style={styles.listItemText}>{children}</Text>
  </View>
);

export function TaskDescriptionTaskStep({ params, onTaskStepComplete }: TaskDescriptionTaskStepProps) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.descriptionContainer}>
          <Text style={[styles.containerText, styles.sectionTitle]}>
            {params.displayName}
          </Text>
          <Text style={[styles.containerText, styles.primaryDescription]}>
            {params.primaryDescription}
          </Text>
          <Text style={[styles.containerText, styles.secondaryDescription]}>
            {params.secondaryDescription}
          </Text>
          <Text style={[styles.drawerText, styles.sectionTitle]}>
            What you'll need
          </Text>
          <View style={styles.list}>
            {params.requirements.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={onTaskStepComplete}>Next</Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerText: {
    color: scheme.body1,
  },
  content: {
    gap: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
  },
  container: {
    flex: 1,
    backgroundColor: scheme.background1,
    position: 'relative',
    justifyContent: 'space-between',
  },
  descriptionContainer: {
    padding: spacing.lg,
    gap: spacing.md,
  },
  icon: {
    width: 32,
    height: 32,
  },
  sectionTitle: {
    ...typography.title,
  },
  primaryDescription: {
    ...typography.paragraph,
  },
  secondaryDescription: {
    ...typography.caption,
  },
  drawerText: {
    color: scheme.body1,
    marginBottom: spacing.md,
  },
  drawer: {
    flex: 1,
    backgroundColor: scheme.panel1,
    paddingHorizontal: spacing.lg,
    alignItems: 'stretch',
  },
  drawerTextContainer: {
    flex: 1,
    gap: spacing.lg,
    paddingTop: spacing.lg,
  },
  buttonContainer: {
    marginBottom: spacing.lg,
  },
  list: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  listItemText: {
    color: scheme.bodyPanel,
    ...typography.paragraph,
  },
});
