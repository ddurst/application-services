var sourcesIndex = JSON.parse('{\
"as_ohttp_client":["",[],["lib.rs"]],\
"autofill":["",[["db",[["models",[],["address.rs","credit_card.rs","mod.rs"]]],["addresses.rs","credit_cards.rs","mod.rs","schema.rs","store.rs"]],["sync",[["address",[],["incoming.rs","mod.rs","outgoing.rs"]],["credit_card",[],["incoming.rs","mod.rs","outgoing.rs"]]],["common.rs","engine.rs","mod.rs"]]],["encryption.rs","error.rs","lib.rs"]],\
"cli_support":["",[],["fxa_creds.rs","lib.rs","prompt.rs"]],\
"crashtest":["",[],["lib.rs"]],\
"embedded_uniffi_bindgen":["",[],["main.rs"]],\
"error_support":["",[],["handling.rs","lib.rs","macros.rs","redact.rs","reporting.rs"]],\
"error_support_macros":["",[],["lib.rs"]],\
"examples_fxa_client":["",[],["devices.rs","main.rs","send_tab.rs"]],\
"fxa_client":["",[["internal",[["commands",[],["mod.rs","send_tab.rs"]],["oauth",[],["attached_clients.rs"]]],["config.rs","device.rs","http_client.rs","mod.rs","oauth.rs","profile.rs","push.rs","scoped_keys.rs","scopes.rs","send_tab.rs","state_manager.rs","state_persistence.rs","telemetry.rs","util.rs"]]],["account.rs","auth.rs","device.rs","error.rs","lib.rs","profile.rs","push.rs","storage.rs","telemetry.rs","token.rs"]],\
"interrupt_support":["",[],["error.rs","interruptee.rs","lib.rs","shutdown.rs","sql.rs"]],\
"logins":["",[["sync",[],["engine.rs","merge.rs","mod.rs","payload.rs","update_plan.rs"]]],["db.rs","encryption.rs","error.rs","lib.rs","login.rs","schema.rs","store.rs","util.rs"]],\
"nimbus":["",[["stateful",[["client",[],["fs_client.rs","http_client.rs","mod.rs","null_client.rs"]]],["behavior.rs","dbcache.rs","enrollment.rs","evaluator.rs","matcher.rs","mod.rs","nimbus_client.rs","persistence.rs","updating.rs"]]],["defaults.rs","enrollment.rs","error.rs","evaluator.rs","json.rs","lib.rs","sampling.rs","schema.rs","strings.rs","targeting.rs","versioning.rs"]],\
"nimbus_cli":["",[["output",[],["deeplink.rs","features.rs","fetch.rs","fml_cli.rs","info.rs","mod.rs","server.rs"]],["sources",[],["experiment.rs","experiment_list.rs","filter.rs","manifest.rs","mod.rs"]],["updater",[],["mod.rs","taskcluster.rs"]]],["cli.rs","cmd.rs","config.rs","feature_utils.rs","main.rs","protocol.rs","value_utils.rs"]],\
"nimbus_fml":["",[["backends",[["kotlin",[["gen_structs",[],["bundled.rs","common.rs","enum_.rs","feature.rs","filters.rs","imports.rs","mod.rs","object.rs","primitives.rs","structural.rs"]]],["mod.rs"]],["swift",[["gen_structs",[],["bundled.rs","common.rs","enum_.rs","feature.rs","filters.rs","imports.rs","mod.rs","object.rs","primitives.rs","structural.rs"]]],["mod.rs"]]],["experimenter_manifest.rs","frontend_manifest.rs","mod.rs"]],["command_line",[],["commands.rs","mod.rs","workflows.rs"]],["util",[],["loaders.rs","mod.rs"]]],["defaults_merger.rs","error.rs","frontend.rs","intermediate_representation.rs","main.rs","parser.rs"]],\
"nss":["",[["pk11",[],["context.rs","mod.rs","slot.rs","sym_key.rs","types.rs"]]],["aes.rs","cert.rs","ec.rs","ecdh.rs","error.rs","lib.rs","pbkdf2.rs","pkixc.rs","secport.rs","util.rs"]],\
"nss_build_common":["",[],["lib.rs"]],\
"nss_sys":["",[["bindings",[],["blapit.rs","certdb.rs","keyhi.rs","keythi.rs","mod.rs","nss.rs","pk11pub.rs","pkcs11n.rs","pkcs11t.rs","pkixc.rs","plarena.rs","prerror.rs","prtypes.rs","secasn1t.rs","seccomon.rs","secitem.rs","seckey.rs","secmodt.rs","secoid.rs","secoidt.rs","secport.rs"]]],["lib.rs"]],\
"places":["",[["api",[],["history.rs","matcher.rs","mod.rs","places_api.rs"]],["bookmark_sync",[],["engine.rs","incoming.rs","mod.rs","record.rs"]],["db",[["tx",[],["coop_transaction.rs","mod.rs"]]],["db.rs","mod.rs","schema.rs"]],["history_sync",[],["engine.rs","mod.rs","plan.rs","record.rs"]],["import",[["ios",[],["history.rs"]]],["common.rs","ios.rs","mod.rs"]],["storage",[["bookmarks",[],["conversions.rs","fetch.rs","json_tree.rs","root_guid.rs"]],["history",[],["actions.rs"]]],["bookmarks.rs","history.rs","history_metadata.rs","mod.rs","tags.rs"]],["types",[],["visit_transition_set.rs"]]],["error.rs","ffi.rs","frecency.rs","hash.rs","lib.rs","match_impl.rs","observation.rs","types.rs","util.rs"]],\
"protobuf_gen":["",[],["main.rs"]],\
"push":["",[["internal",[["communications",[],["rate_limiter.rs"]],["storage",[],["db.rs","mod.rs","record.rs","schema.rs"]]],["communications.rs","config.rs","crypto.rs","mod.rs","push_manager.rs"]]],["error.rs","lib.rs"]],\
"rc_crypto":["",[["aead",[],["aes_cbc.rs","aes_gcm.rs"]]],["aead.rs","agreement.rs","constant_time.rs","contentsignature.rs","digest.rs","ece_crypto.rs","error.rs","hawk_crypto.rs","hkdf.rs","hmac.rs","lib.rs","pbkdf2.rs","rand.rs","signature.rs"]],\
"rc_log_ffi":["",[],["android.rs","lib.rs","settable_log.rs"]],\
"remote_settings":["",[],["client.rs","config.rs","error.rs","lib.rs"]],\
"restmail_client":["",[],["error.rs","lib.rs"]],\
"sql_support":["",[],["conn_ext.rs","debug_tools.rs","each_chunk.rs","lib.rs","maybe_cached.rs","open_database.rs","repeat.rs"]],\
"sync15":["",[["bso",[],["content.rs","crypto.rs","mod.rs","test_utils.rs"]],["client",[],["coll_state.rs","coll_update.rs","collection_keys.rs","mod.rs","request.rs","state.rs","status.rs","storage_client.rs","sync.rs","sync_multiple.rs","token.rs","util.rs"]],["clients_engine",[],["engine.rs","mod.rs","record.rs","ser.rs"]],["engine",[],["bridged_engine.rs","mod.rs","request.rs","sync_engine.rs"]]],["client_types.rs","device_type.rs","enc_payload.rs","error.rs","key_bundle.rs","lib.rs","record_types.rs","server_timestamp.rs","telemetry.rs"]],\
"sync_guid":["",[],["lib.rs","rusqlite_support.rs","serde_support.rs"]],\
"sync_manager":["",[],["error.rs","lib.rs","manager.rs","types.rs"]],\
"tabs":["",[["sync",[],["bridge.rs","engine.rs","mod.rs","record.rs"]]],["error.rs","lib.rs","schema.rs","storage.rs","store.rs"]],\
"types":["",[],["lib.rs"]],\
"viaduct":["",[["backend",[],["ffi.rs"]],["headers",[],["name.rs"]]],["backend.rs","error.rs","headers.rs","lib.rs","mozilla.appservices.httpconfig.protobuf.rs","settings.rs"]],\
"viaduct_reqwest":["",[],["lib.rs"]],\
"webext_storage":["",[["sync",[],["bridge.rs","incoming.rs","mod.rs","outgoing.rs"]]],["api.rs","db.rs","error.rs","ffi.rs","lib.rs","migration.rs","schema.rs","store.rs"]]\
}');
createSourceSidebar();
