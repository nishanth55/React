import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

export default class Table1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        "Activities",
        "Points",
        "Done",
        "Units",
        "Status",
        "Act ID",
        "Level",
      ],
      tableHead2: ["Islamic", "Total: 5000 points"],
      tableData: [
        ["Five Kalimah's", "10", "A", "1", "A", "1001", "0"],
        ["Sana Subhanakala", "10", "S", "1", "R", "1002", "0"],
        ["Athiyaathu", "10", "", "1", "S", "1003", "1"],
        ["Darood Sharif", "10", "", "1", "S", "1004", "1"],
      ],
      tableHead3: ["Topics : (Present)", "Total: 200 points"],
      tableHead4: ["Quran Popular Surah's :(Recite)", "Total: 100 points"],
      tableHead5: ["Namaz : (Perform)", "Total: 190 points"],
      tableData2: [
        ["Faijr", "10", "30", "29", "S", "10025", "2"],
        ["Sana Subhanakala", "2", "20", "20", "S", "10032", "1"],
        ["Athiyaathu", "10", "4", "0", "A", "10035", "3"],
      ],
      tableHead6: ["Zikr (Chant) (x 100 times)", "Total: 290 points"],
      tableData3: [
        ["Kalimah Tayeeb", "4", "20", "29", "S", "10042", "2"],
        ["Tasbee Fatimah", "2", "50", "30", "S", "10042", "1"],
        ["Astaghafar", "10", "4", "0", "A", "10043", "3"],
      ],
      tableHead7: ["Totals", "8000", "2300", "782", "5680"],
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 1, borderColor: "#BEBEBE" }}>
          <Row
            data={state.tableHead}
            flexArr={[3]}
            style={styles.head}
            textStyle={styles.headtext}
          />
          <Row
            style={styles.row}
            data={state.tableHead2}
            flexArr={[3]}
            style={styles.head2}
            textStyle={styles.headtext2}
          />
          <Rows data={state.tableData} textStyle={styles.text} />
          <Row
            data={state.tableHead3}
            flexArr={[3]}
            style={styles.head3}
            textStyle={styles.headtext3}
          />
          <Row
            data={state.tableHead4}
            style={styles.head4}
            flexArr={[3]}
            textStyle={styles.headtext4}
          />
          <Row
            data={state.tableHead5}
            style={styles.head5}
            flexArr={[3]}
            textStyle={styles.headtext5}
          />
          <Rows data={state.tableData2} textStyle={styles.text} />
          <Row
            data={state.tableHead6}
            flexArr={[3]}
            style={styles.head6}
            textStyle={styles.headtext6}
          />
          <Rows data={state.tableData2} textStyle={styles.text} />
          <Row
            data={state.tableHead7}
            flexArr={[3, 2, 2, 2, 2]}
            style={styles.head}
            textStyle={styles.headtext}
          />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  head: {
    backgroundColor: "#abd03a",
  },
  head2: {
    backgroundColor: "green",
  },
  head3: {
    backgroundColor: "#abd03a",
  },
  head4: {
    backgroundColor: "#abd03a",
  },
  head5: {
    backgroundColor: "#abd03a",
  },
  head6: {
    backgroundColor: "#abd03a",
  },
  text: {
    fontSize: 8,
    textAlign: "center",
    margin: 6,
  },
  headtext: { fontSize: 9, fontWeight: "bold", textAlign: "center", margin: 6 },
  headtext2: { fontSize: 9, fontWeight: "bold", margin: 6 },
  headtext3: { fontSize: 9, fontWeight: "bold", margin: 6 },
  headtext4: { fontSize: 9, fontWeight: "bold", margin: 6 },
  headtext5: { fontSize: 9, fontWeight: "bold", margin: 6 },
  headtext6: { fontSize: 9, fontWeight: "bold", margin: 6 },
});
