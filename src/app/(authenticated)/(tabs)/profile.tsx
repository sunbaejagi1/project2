import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Profile() {
  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <View style={styles.cover} />

      <View style={styles.body}>
        <Image
          source={{
            uri: "https://scontent.fcgy1-2.fna.fbcdn.net/v/t39.30808-6/902201071_1668381278324596_4802437404125067844_n.avif?stp=dst-jpg_tt6&cstp=mx1159x1158&ctp=s1159x1158&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEbOjqSCjN_gJSUEUXn-X7tJMTmSsEBbz0kxOZKwQFvPcl1SHdhZ-gdrOucp6_DbTlUFt5kqXPJcPZNorM_mQSQ&_nc_ohc=BLcX8V_iREgQ7kNvwHdi4wP&_nc_oc=Ado10E6qpzVXzZEjIvJZXkeWEYnDV2Y_A3l1HN6nNaoWn-sNy8hfbsZUxV5eVOVXQbs&_nc_zt=23&_nc_ht=scontent.fcgy1-2.fna&_nc_gid=2YrohWKrD6MTCz-0v_ilxg&_nc_ss=7b2a8&oh=00_AQSuMsfGNNQMQrYGwRwb6MeirTyvd-N0tyI7DDs1gngCBg&oe=6B047368",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Ralph Lorence Macarandan</Text>
        <Text style={styles.username}>@raaappyyyy</Text>
        <Text style={styles.bio}>
          Sharing my thoughts, lessons, and experiences one post at a time. ✨
        </Text>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNum}>24</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNum}>1.2K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNum}>380</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Personal Details</Text>
          <Text style={styles.detail}>📧 ralphlorence94@email.com</Text>
          <Text style={styles.detail}>
            📍 Zone 8 Molugan City of El Salvador, Philippines
          </Text>
          <Text style={styles.detail}>📅 Joined January 2026</Text>
          <Text style={styles.detail}>📞 +63 951 345 6789</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>My Latest Thought</Text>
          <Text style={styles.thought}>
            "Every mistake I made while learning taught me more than any
            tutorial."
          </Text>
        </View>

        <TouchableOpacity
          style={styles.homeBtn}
          onPress={() => router.push("/home")}
        >
          <Text style={styles.homeText}>Back to Feed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F3F4F6" },
  cover: { height: 150, backgroundColor: "#6C5CE7" },
  body: { alignItems: "center", paddingHorizontal: 16, paddingBottom: 30 },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginTop: -55,
    borderWidth: 4,
    borderColor: "#F3F4F6",
  },
  name: { fontSize: 22, fontWeight: "800", marginTop: 10, color: "#111827" },
  username: { color: "#6B7280", marginTop: 2 },
  bio: { textAlign: "center", color: "#374151", marginTop: 10, lineHeight: 20 },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 14,
    marginTop: 18,
  },
  stat: { alignItems: "center" },
  statNum: { fontSize: 18, fontWeight: "800", color: "#111827" },
  statLabel: { color: "#6B7280", fontSize: 13 },
  editBtn: {
    backgroundColor: "#6C5CE7",
    width: "100%",
    height: 50,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  editText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontWeight: "800",
    fontSize: 16,
    marginBottom: 10,
    color: "#111827",
  },
  detail: { color: "#374151", fontSize: 15, paddingVertical: 6 },
  thought: {
    color: "#374151",
    fontSize: 15,
    fontStyle: "italic",
    lineHeight: 22,
  },
  homeBtn: {
    width: "100%",
    height: 50,
    borderRadius: 14,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#6C5CE7",
  },
  homeText: { color: "#6C5CE7", fontWeight: "700", fontSize: 16 },
  logoutBtn: {
    width: "100%",
    height: 50,
    borderRadius: 14,
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#EF4444",
  },
  logoutText: { color: "#EF4444", fontWeight: "700", fontSize: 16 },
});
