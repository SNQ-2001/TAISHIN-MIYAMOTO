import CardItem from "./ui/CardItem"
import NavigationView from "./ui/NavigationView"
import { Grid, Box } from "@chakra-ui/react"
import SectionTitle from "./ui/SectionTitle"
import { appData } from "./data/appData"

export default function Nav() {
  return (
    <NavigationView>
      <Box p={3}>
        {appData.map(({ section, items }) => (
          <Box key={section} mb={8}>
            <SectionTitle title={section} />
            <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={3}>
              {items.map(({ url, iconSrc, title, details, status }) => (
                <CardItem
                  key={title}
                  url={url}
                  iconSrc={iconSrc}
                  title={title}
                  details={details}
                  status={status}
                />
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </NavigationView>
  )
}
