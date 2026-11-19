import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  return (
    <View style={styles.screen}>
      <View style={styles.topBar}>
        <Text style={styles.logo}>Threads 💭</Text>
        <TouchableOpacity onPress={() => router.push("/profile")}>
          <Image
            source={{
              uri: "https://scontent.fcgy1-2.fna.fbcdn.net/v/t39.30808-6/902201071_1668381278324596_4802437404125067844_n.avif?stp=dst-jpg_tt6&cstp=mx1159x1158&ctp=s1159x1158&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEbOjqSCjN_gJSUEUXn-X7tJMTmSsEBbz0kxOZKwQFvPcl1SHdhZ-gdrOucp6_DbTlUFt5kqXPJcPZNorM_mQSQ&_nc_ohc=BLcX8V_iREgQ7kNvwHdi4wP&_nc_oc=Ado10E6qpzVXzZEjIvJZXkeWEYnDV2Y_A3l1HN6nNaoWn-sNy8hfbsZUxV5eVOVXQbs&_nc_zt=23&_nc_ht=scontent.fcgy1-2.fna&_nc_gid=2YrohWKrD6MTCz-0v_ilxg&_nc_ss=7b2a8&oh=00_AQSuMsfGNNQMQrYGwRwb6MeirTyvd-N0tyI7DDs1gngCBg&oe=6B047368",
            }}
            style={styles.topAvatar}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Share box */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Image
              source={{
                uri: "https://scontent.fcgy1-2.fna.fbcdn.net/v/t39.30808-6/902201071_1668381278324596_4802437404125067844_n.avif?stp=dst-jpg_tt6&cstp=mx1159x1158&ctp=s1159x1158&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEbOjqSCjN_gJSUEUXn-X7tJMTmSsEBbz0kxOZKwQFvPcl1SHdhZ-gdrOucp6_DbTlUFt5kqXPJcPZNorM_mQSQ&_nc_ohc=BLcX8V_iREgQ7kNvwHdi4wP&_nc_oc=Ado10E6qpzVXzZEjIvJZXkeWEYnDV2Y_A3l1HN6nNaoWn-sNy8hfbsZUxV5eVOVXQbs&_nc_zt=23&_nc_ht=scontent.fcgy1-2.fna&_nc_gid=2YrohWKrD6MTCz-0v_ilxg&_nc_ss=7b2a8&oh=00_AQSuMsfGNNQMQrYGwRwb6MeirTyvd-N0tyI7DDs1gngCBg&oe=6B047368",
              }}
              style={styles.avatar}
            />
            <TextInput
              style={styles.shareInput}
              placeholder="What's on your mind?"
              placeholderTextColor="#9CA3AF"
              multiline
            />
          </View>
          <TouchableOpacity style={styles.postBtn}>
            <Text style={styles.postBtnText}>Share</Text>
          </TouchableOpacity>
        </View>

        {/* Post 1 */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Image
              source={{
                uri: "https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/894607310_1662843645545026_2057478936443869053_n.avif?stp=dst-jpg_tt6&cstp=mx960x958&ctp=s960x958&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEoXobBcInkYQ0-Tix79gQRtHVyKuDK-1C0dXIq4Mr7UNsnzLNh5gJu9HbkkFHMFzjVYxzQE5zLZxH0-Lc864L-&_nc_ohc=m3tvia1qm5YQ7kNvwG0suSr&_nc_oc=AdrQ9pJiKzdSl2Prm4KITDV0kLVWySG4001RXwgOVEw0ASLUj2spYDD292BaKlOxhvM&_nc_zt=23&_nc_ht=scontent.fcgy1-1.fna&_nc_gid=IQdluTfMoHYGWhG2Ih6fMQ&_nc_ss=7b2a8&oh=00_AQQmzdMU_zljzz_KRcXImfcoB0M6vYtdh-Ro1Gzwv0j4ZA&oe=6B0449D1",
              }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>sunbaejagi</Text>
              <Text style={styles.username}>@sunbaejagi · 1min</Text>
            </View>
          </View>
          <Text style={styles.text}>Today is a Good Day. 🌿</Text>
          <Image
            source={{
              uri: "https://scontent.fcgy1-3.fna.fbcdn.net/v/t39.30808-6/903378526_1668619921634065_6672855688943977397_n.avif?stp=dst-jpg_tt6&cstp=mx750x750&ctp=s750x750&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFq2nfgm1z2XnUlKzJ3pj9t55LvM1cXRNvnku8zVxdE28GO-Qk3ba9m_O5WR6AhbJGFdl0ZUeiJOkWHvKT_byER&_nc_ohc=LFEtWT6BrPkQ7kNvwGnhr0T&_nc_oc=AdpWFk8WSAwRqblX5fQ9JKUaEf5xhsP9I2Y9Zk96arr0jAOQzshiJX2luL_6BsiUV3k&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&_nc_gid=WOJPfDOxFeOniT_H36sloQ&_nc_ss=7b2a8&oh=00_AQSWMpNGiJm1-MMMEY1H-q56XSw6jkEi5C9gezCOyNcjIg&oe=6B047696",
            }}
            style={styles.postImage}
          />
          <Text style={styles.stats}>❤️ 128 💬 14 🔁 6</Text>
        </View>

        {/* Post 2 */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Image
              source={{
                uri: "https://scontent.fcgy1-3.fna.fbcdn.net/v/t39.30808-6/800826459_122093311971482828_6952078176677231589_n.jpg?stp=dst-jpg_tt6&cstp=mx447x447&ctp=s447x447&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEa7R98TKYMzoqIv8-DFX09i39BxfNOmuOLf0HF806a44b-TMyLuWObIH7c57_Eo4ruOqE38bGFF5gHlM3HaIw2&_nc_ohc=l9uAay-mH-EQ7kNvwEE6eJY&_nc_oc=AdoJ1n6J4fGzw_p0sb2KYt36eJ1s1g2Ah8jOM2p3pvyxZCdGpqx7O3JnCgaPeALuLNo&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&_nc_gid=toGbFs40OBVgkQQEQ--r5w&_nc_ss=7b2a8&oh=00_AQRi2XAy-682y3tfkFM8qXlUmNLofhIctTJ3eUYtoDud6g&oe=6B046539",
              }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>Sigabo</Text>
              <Text style={styles.username}>@sigabo · 1h</Text>
            </View>
          </View>
          <Text style={styles.text}>Sasabak na sa Laban! 🚀</Text>
          <Text style={styles.stats}>❤️ 240 💬 31 🔁 12</Text>
        </View>

        {/* Post 3 */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Image
              source={{
                uri: "https://scontent.fcgy1-2.fna.fbcdn.net/v/t39.30808-6/863566882_122140039845223831_6297830573041998900_n.avif?stp=dst-jpg_tt6&cstp=mx286x285&ctp=s286x285&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFDzsekJ_58-AD4A-UMMSCwdwWvtcVWjwd3Ba-1xVaPB1mTh2jccFaf1H3am4ITYc4vxdk6Z6x8s4voWE-Ig0vP&_nc_ohc=M9Dz5v2IxhMQ7kNvwHBZz1p&_nc_oc=Adps-55bXt3ouxP0u74aBEquaSJKMlrMky_fbnWI1jzonQsASzaAxRWRHqpsWgjHxHs&_nc_zt=23&_nc_ht=scontent.fcgy1-2.fna&_nc_gid=Sb7fYzObJfjTVjHPy_MS9Q&_nc_ss=7b2a8&oh=00_AQTcH0Hf7lvP7VoZMvVLE2qNIx-hSbIYN71eYFXZPMkkSA&oe=6B044F45",
              }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>Tanggol</Text>
              <Text style={styles.username}>@tanggol · 1d</Text>
            </View>
          </View>
          <Text style={styles.text}>Susulong na sa mga Pulang Araw. ⛰️</Text>
          <Image
            source={{
              uri: "https://scontent.fcgy1-2.fna.fbcdn.net/v/t39.30808-6/584415136_122110631385040560_620349883699810048_n.jpg?stp=dst-jpg_tt6&cstp=mx193x194&ctp=s193x194&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGQXRtNIHQAa96C2Et2rDffz3H3_BNucg_Pcff8E25yD6XDoPTAcRYs5DkOSqFje0dKbW_0aqyPGBgBhEWVqiwF&_nc_ohc=-8jQwWobMvgQ7kNvwGVWfHC&_nc_oc=Adog7hbLTi9uwBkepLgQD6JEHXZECzLsPagO0bJW7Pno_-AvBWteK4h4MthozpSnbCU&_nc_zt=23&_nc_ht=scontent.fcgy1-2.fna&_nc_gid=L301QTUJFKIY5hPeZ3dlHA&_nc_ss=7b2a8&oh=00_AQT6TUiX41TOtoT59f0mGncFcujl2qnxKDxwKzlz40esmg&oe=6B046A22",
            }}
            style={styles.postImage}
          />
          <Text style={styles.stats}>❤️ 175 💬 22 🔁 9</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F3F4F6", paddingTop: 50 },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
  logo: { fontSize: 26, fontWeight: "900", color: "#6C5CE7" },
  topAvatar: { width: 36, height: 36, borderRadius: 18 },
  card: { backgroundColor: "#fff", marginTop: 10, paddingVertical: 12 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    gap: 10,
  },
  avatar: { width: 44, height: 44, borderRadius: 22 },
  name: { fontWeight: "700", fontSize: 15, color: "#111827" },
  username: { color: "#6B7280", fontSize: 13 },
  text: {
    paddingHorizontal: 14,
    marginVertical: 10,
    fontSize: 15,
    lineHeight: 22,
    color: "#111827",
  },
  postImage: { width: "100%", height: 260 },
  stats: {
    paddingHorizontal: 14,
    paddingTop: 10,
    color: "#374151",
    fontWeight: "600",
  },
  shareInput: { flex: 1, fontSize: 16, color: "#111827", minHeight: 44 },
  postBtn: {
    alignSelf: "flex-end",
    marginRight: 14,
    marginTop: 8,
    backgroundColor: "#6C5CE7",
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 20,
  },
  postBtnText: { color: "#fff", fontWeight: "700" },
});
