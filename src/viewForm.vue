<template>
	<div class="viewForm-main">
		<el-collapse v-model="activeName"
					 :class="collapseClassName">
			<el-collapse-item v-for="(i, index) in data"
							  :key="'data' + index"
							  :title="i.title"
							  :name="i.name">
				<div class="collapse_body">
					<el-row :gutter="20">
						<el-col v-for="(x, y) in i.list"
								:key="'data.x' + y"
								:span="x.span">
							<el-table :data="x.list">
								<el-table-column :width="labelWidth" 
                                                 show-overflow-tooltip
                                                 align="right">
									<template slot-scope="scope">
										<span>
											{{scope.row.name + ':'}}
										</span>
									</template>
								</el-table-column>
								<el-table-column show-overflow-tooltip>
                                    <template slot-scope="scope">
										<span>
											{{scope.row.content}}
										</span>
                                        <span v-if="scope.row.unit">
                                            {{scope.row.unit}}
                                        </span>
									</template>             
								</el-table-column>
							</el-table>
						</el-col>
					</el-row>
				</div>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
export default {
	name: 'viewForm', // 表单回显组件
	props: {
		collapseClassName: {
			type: String,
			default: ''
		},

        labelWidth: {
            type: String,
            default: '120'
        },

		activeNames: {
			type: Array,
			default: () => {
				return []
			}
		},

		data: {
			type: Array,
			default: () => {
				return []
			}
		}
	},
    data() {
        return {
            activeName: []
        }
    },
    methods: {
        init() {
            this.data.map(i => {
                i.list.map(x => {
                    x.list = []
                    x.list.push(x)
                    if (x.content === null || x.content.length === 0) {
                        x.content = '暂无'
                    }
                })
            })
        }
    },
    created() {
        this.init()
        this.activeName = this.activeNames
    },
    watch: {
        data() {
            this.init()
        },

        activeNames(val) {
            this.activeName = val
        }
    }
}
</script>

<style lang="less">
.viewForm-main {
    .el-col {
        height: 40px;
        line-height: 40px;
        margin-bottom: 5px;
        .el-table__header-wrapper {
            display: none;
        }
        .el-table::before {
            display: none;
        }
    }
}
</style>


