import CardItem from "./ui/CardItem"
import NavigationView from "./ui/NavigationView"
import { Grid, Box } from "@chakra-ui/react"
import SectionTitle from "./ui/SectionTitle"

export default function Nav() {
  return (
    <NavigationView>
      <Box p={3}>
        <SectionTitle title="Web" />
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={3}>
          <CardItem
            url="https://apps.apple.com/jp/app/g-search/id1570395606"
            iconSrc="image/G-Search.png"
            title="G-Search"
            details="荒野行動のパス打ち補助アプリ"
          />
          <CardItem
            url="https://apps.apple.com/jp/app/g-search/id1570395606"
            iconSrc="image/G-Search.png"
            title="G-Search"
            details="荒野行動のパス打ち補助アプリ"
          />
          <CardItem
            url="https://apps.apple.com/jp/app/g-search/id1570395606"
            iconSrc="image/G-Search.png"
            title="G-Search"
            details="荒野行動のパス打ち補助アプリ"
          />
          <CardItem
            url="https://apps.apple.com/jp/app/g-search/id1570395606"
            iconSrc="image/G-Search.png"
            title="G-Search"
            details="荒野行動のパス打ち補助アプリ"
          />
          <CardItem
            url="https://apps.apple.com/jp/app/g-search/id1570395606"
            iconSrc="image/G-Search.png"
            title="G-Search"
            details="荒野行動のパス打ち補助アプリ"
          />
          <CardItem
            url="https://apps.apple.com/jp/app/g-search/id1570395606"
            iconSrc="image/G-Search.png"
            title="G-Search"
            details="荒野行動のパス打ち補助アプリ"
          />
        </Grid>
      </Box>
    </NavigationView>
  )
}
